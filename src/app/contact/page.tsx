import AnimatedText from '@/components/AnimatedText'
import AnimatedContactForm from '@/components/AnimatedContactForm'

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24 bg-gray-100">
      <AnimatedText className="text-3xl md:text-4xl font-bold mb-4 md:mb-8 text-center text-navy">
        Contact Us
      </AnimatedText>
      <AnimatedContactForm />
    </main>
  )
}
