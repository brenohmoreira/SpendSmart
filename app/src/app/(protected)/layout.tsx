import HeaderComponent from "@/components/HeaderComponent";
import NavigationComponent from "@/components/NavigationComponent";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderComponent/>
      <div className="w-full min-h-screen">
        <NavigationComponent/>
        <div>
          {children}
        </div>
      </div>
    </>
  )
}
