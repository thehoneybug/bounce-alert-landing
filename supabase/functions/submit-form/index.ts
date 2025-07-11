
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.50.4";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface FormSubmissionRequest {
  name: string;
  email: string;
  company: string;
  campaigns: string;
  challenges?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: FormSubmissionRequest = await req.json();
    
    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_ANON_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Store form submission in database
    const { data, error: dbError } = await supabase
      .from('form_submissions')
      .insert([
        {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          campaigns: formData.campaigns,
          challenges: formData.challenges || null,
        }
      ])
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      throw new Error(`Database error: ${dbError.message}`);
    }

    console.log('Form submission stored:', data);

    // Send notification email to the business owner
    const notificationEmail = await resend.emails.send({
      from: "Buztler <onboarding@resend.dev>",
      to: ["basim.amin@gmail.com"],
      subject: "New Professional Monitoring Service Inquiry",
      html: `
        <h2>New Service Inquiry Received</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Company:</strong> ${formData.company}</p>
        <p><strong>Monthly Email Volume:</strong> ${formData.campaigns}</p>
        ${formData.challenges ? `<p><strong>Biggest Challenge:</strong> ${formData.challenges}</p>` : ''}
        <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
        <hr>
        <p><em>This inquiry was submitted through the Buztler professional monitoring service landing page.</em></p>
      `,
    });

    // Send confirmation email to the lead
    const confirmationEmail = await resend.emails.send({
      from: "Buztler <onboarding@resend.dev>",
      to: [formData.email],
      subject: "Thank you for your interest in Professional Email Monitoring",
      html: `
        <h2>Thank you for your inquiry, ${formData.name}!</h2>
        <p>We have received your request for professional email bounce rate monitoring services and will contact you within 2 hours to discuss your monitoring needs.</p>
        
        <h3>What happens next:</h3>
        <ul>
          <li>Our team will review your requirements</li>
          <li>We'll prepare a customized monitoring solution for ${formData.company}</li>
          <li>You'll receive a personal call within 2 hours</li>
          <li>We can have your monitoring system set up within 24 hours</li>
        </ul>
        
        <p>In the meantime, if you have any urgent questions, please don't hesitate to reach out to us at support@buztler.com</p>
        
        <p>Best regards,<br>
        The Buztler Professional Monitoring Team</p>
        
        <hr>
        <p><em>This is an automated confirmation. Our team will contact you personally within 2 hours.</em></p>
      `,
    });

    console.log("Notification email sent:", notificationEmail);
    console.log("Confirmation email sent:", confirmationEmail);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Form submitted successfully and emails sent",
        submissionId: data.id
      }), 
      {
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in submit-form function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
