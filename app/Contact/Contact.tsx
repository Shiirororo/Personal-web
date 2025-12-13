"use client";
import { FaFacebook, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { sendEmail } from "@/lib/resend";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";




export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendEmail({
        name: form.name,
        email: form.email,
        message: form.message,
      });

      console.log("User send an email: ", form);
      setForm({ name: "", email: "", message: "" });
      alert("Send message successfully")
    }
    catch (error) {
      console.error("Error sending email", error);
    }

    //
  }




  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <Card className="max-w-5xl w-full grid md:grid-cols-2 gap-10 bg-card/5 backdrop-blur-md border border-border shadow-xl p-8">
        {/* LEFT: Info */}
        <div className="space-y-6 text-foreground">
          <h2 className="text-4xl font-bold">Contact Me</h2>
          <p className="text-muted-foreground">
            Feel free to reach out through the form or connect with me via social
            media!
          </p>
          <div className="flex space-x-6 text-2xl text-muted-foreground">
            <a
              href="https://github.com/Shiirororo"
              target="_blank"
                className="hover:text-foreground transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/nh%C3%A2nn-undefined-b58037385/"
              target="_blank"
                className="hover:text-primary transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/SadShiro468?s=21"
              target="_blank"
                className="hover:text-foreground transition"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.facebook.com/chackhongphai.nhan/"
              target="_blank"
                className="hover:text-primary transition"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* RIGHT: Contact Form */}
        <Card className="bg-card/5 backdrop-blur-md border border-border p-6 text-foreground">
          <CardHeader>
            <CardTitle className="text-lg">Send me a message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium">Name</label>
                <Input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="mt-1"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium">Your contact email</label>
                <Input
                  name="email"
                  value={form.email}
                  maxLength={100}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  type="email"
                  className="mt-1"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium">Message</label>
                <Textarea
                  name="message"
                  value={form.message}
                  maxLength={100}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  className="mt-1"
                  rows={4}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary/70 hover:bg-primary/80 text-primary-foreground font-semibold backdrop-blur-lg transition"
              >
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </Card>
    </section>
  );
}
