import ContactForm from "@/components/contact/ContactForm";
import PageTitle from "@/components/PageTitle";

export default function ContactUsPage() {
  return (
    <div className="relative min-h-screen">
      <PageTitle />
      <ContactForm />
    </div>
  );
}