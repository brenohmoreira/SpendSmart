import HeaderComponent from "@/components/HeaderComponent";
import NavigationComponent from "@/components/NavigationComponent";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderComponent/>
      <div className="w-full h-[93vh] flex row">
        <NavigationComponent/>
        <div className="overflow-y-auto h-full w-[85vw]">
          {children}
        </div>
      </div>
    </>
  )
}
