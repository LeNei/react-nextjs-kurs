// Dadurch, dass sich dieses Layout in einer Route-Group befindet
// wird es nur auf Seiten in der selben Group angewendet.
export default function DashboardLayout({ children }) {
  return (
    <div>
      <div className="group h-20 w-full bg-white hover:bg-black active:bg-[#123456] sm:h-25 md:h-32 lg:h-36 xl:h-40">
        <p className="text-xl font-bold group-hover:text-white">Header</p>
      </div>
      {children}
    </div>
  );
}
