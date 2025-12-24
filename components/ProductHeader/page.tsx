

export default function ProductHeader() {
  return (
    <section className="relative w-full h-[200px] flex items-center justify-center">

      <div className="absolute inset-0 bg-[#F5F5F5]" />

      {/* Background Desktop */}
      <div
        className="hidden sm:flex absolute w-full py-24 items-center justify-center bg-center bg-no-repeat bg-content"
        style={{ backgroundImage: "url('/Product Details.png')" }}
      />

      {/* Background Mobile */}
    
<div
  className="flex sm:hidden absolute w-full h-full items-center justify-center bg-no-repeat"
  style={{
    backgroundImage: "url('/T-ShirtBG.png')",
    backgroundSize: "50%", 
    backgroundPosition: "center center",
  }}
/>

      {/* Background ثابت لكل الشاشات */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/3d-vertical-background-with-abstract-style 1.png')" }}
      />

      {/* Content */}
      <h1 className="relative z-10 text-3xl font-semibold text-[#020202] text-center">
        <span className="hidden sm:inline">Product Details</span>
        <span className="inline sm:hidden">T-Shirt</span>
      </h1>

    </section>
  );
}
