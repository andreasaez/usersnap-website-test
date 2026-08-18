export default function GradientBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-purple-faint blur-3xl" />
      <div className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-sky/10 blur-3xl" />
    </div>
  )
}
