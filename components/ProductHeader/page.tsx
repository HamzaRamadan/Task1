


export default function ProductHeader() {
  return (
    <section className="relative w-full h-[200px] flex items-center justify-center">

      

      <div className="absolute inset-0 bg-[#F5F5F5]" />

      <div
        className="absolute w-full py-24 flex items-center justify-center bg-center bg-no-repeat bg-content"
        style={{ backgroundImage: "url('/Product Details.png')" }}
      />
      
<div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/3d-vertical-background-with-abstract-style 1.png')" }}
      />
    

      {/* Content */}
      <h1 className="relative z-10 text-4xl font-semibold text-[#020202] text-center">
        Product Details
      </h1>
      
    </section>
  );
}
