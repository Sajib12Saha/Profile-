import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { contactSchema } from "@/schema/zod-validation";
import { sendEmail } from "@/actions/send-mail";
import { useState } from "react";

type ContactFormValues = z.infer<typeof contactSchema>;

export const Emailform = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const onSubmit = async (data: ContactFormValues) => {
    setIsLoading(true);
    setServerError(null);
    setSuccessMessage(null);
  
    try {
      await sendEmail({
        from: data.email,
        subject: `Subject:${data.subject} New message from ${data.email}`,
        text: data.message,
      });
  
      setSuccessMessage("Your message has been sent successfully!");
      reset(); // Reset the form after successful submission
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to send message. Please try again.";
      setServerError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      {/* Name Input */}
      <div>
        <Label className="block text-sm font-medium text-white">Name</Label>
        <Input {...register("name")} placeholder="Your name" />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>


      {/* Email Input */}
      <div>
        <Label className="block text-sm font-medium text-white">Email</Label>
        <Input {...register("email")} placeholder="example@gmail.com" />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>
      <div>
        <Label className="block text-sm font-medium text-white">Subject</Label>
        <Input {...register("name")} placeholder="subject..." />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      {/* Message Textarea */}
      <div>
        <Label className="block text-sm font-medium text-white">Message</Label>
        <Textarea {...register("message")} placeholder="Write your message here..." rows={5} />
        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
      </div>

      {/* Success/Error Messages */}
      {serverError && <p className="text-red-500 text-sm">{serverError}</p>}
      {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full px-4 py-2 bg-purple-800 text-white rounded-md hover:bg-purple-600"
        disabled={isLoading}
      >
        {isLoading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};
