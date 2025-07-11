
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { name, email, company, campaigns, challenges, phone_number, webhook_url } = await req.json()

    console.log('Form submission received:', { name, email, company, campaigns, phone_number, webhook_url })

    // Insert the form submission into the database
    const { data, error } = await supabase
      .from('form_submissions')
      .insert([
        {
          name,
          email,
          company,
          campaigns,
          challenges,
          phone_number,
          webhook_url
        }
      ])
      .select()

    if (error) {
      console.error('Database error:', error)
      throw error
    }

    console.log('Form submission saved to database:', data)

    // Trigger Zapier webhook if provided
    if (webhook_url) {
      console.log('Triggering Zapier webhook:', webhook_url)
      
      try {
        const webhookResponse = await fetch(webhook_url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            company,
            campaigns,
            challenges,
            phone_number,
            submission_id: data[0]?.id,
            timestamp: new Date().toISOString(),
            source: 'Buztler Landing Page'
          })
        })

        console.log('Webhook response status:', webhookResponse.status)
        
        if (!webhookResponse.ok) {
          console.error('Webhook failed with status:', webhookResponse.status)
        } else {
          console.log('Webhook triggered successfully')
        }
      } catch (webhookError) {
        console.error('Error triggering webhook:', webhookError)
        // Don't fail the entire request if webhook fails
      }
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Form submitted successfully',
        submission_id: data[0]?.id 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )

  } catch (error) {
    console.error('Error processing form submission:', error)
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || 'An error occurred while processing your submission' 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})
