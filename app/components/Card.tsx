export default function Card({ 
    children,
    classAlignment = "", 
}: { 
    children: React.ReactNode;
    classAlignment?: string; 
}) {
  return (
    <div className={`bg-card p-6 md:p-10 lg:p-14 rounded-2xl inline-block relative ${classAlignment}`}>
      {children}
    </div>
  );
}