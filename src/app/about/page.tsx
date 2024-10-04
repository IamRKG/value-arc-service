import AnimatedText from '@/components/AnimatedText'

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24 bg-gray-100">
      <AnimatedText className="text-3xl md:text-4xl font-bold mb-4 md:mb-8 text-center text-navy">
        About Value Arc Service
      </AnimatedText>
      <AnimatedText className="text-lg md:text-xl max-w-2xl text-center text-gray-700">
        Value Arc Service is a leading consulting firm specializing in helping businesses create and capture value. 
        With our team of experienced professionals, we provide innovative solutions to complex business challenges, 
        enabling our clients to achieve sustainable growth and competitive advantage.
      </AnimatedText>
    </main>
  )
}
