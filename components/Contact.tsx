"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget;

    const formData = new FormData(form)

    // Convert FormData to URL-encoded format for Google Forms
    const formBody = new URLSearchParams()
    formData.forEach((value, key) => formBody.append(key, value.toString()))

    const submissionURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSdzMGiAr6GZYwJb9_7_4iSmSIY19lo2PB10yvUsSrngxOQzDg/formResponse"

    try {
      await fetch(submissionURL, {
        method: "POST",
        body: formBody,
        mode: "no-cors", // Required to avoid CORS issues with Google Forms
      })

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      })

      form.reset(); // Clear form after successful submission
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <Input type="text" name="entry.1746105948" placeholder="Your Name" required />
        <Input type="email" name="entry.1076431236" placeholder="Your Email" required />
        <Textarea name="entry.363323293" placeholder="Your Message" required />
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </section>
  )
}
