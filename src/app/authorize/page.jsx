import FormComponent from "@/components/form/component"



export default function Page() {


  return (
    <div style={{
      backgroundImage: "linear-gradient(to right, #36d4a1, #2ec8a2, #14a3a9)",
      position: "absolute",
      top: "0",
      left: "0",
      width: "100vw",
      height: "100vh"
    }}>
      <FormComponent />
    </div>
  )
}
