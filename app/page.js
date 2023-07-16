import Counter from "@/components/Counter";
import Users from "@/components/Users";

export default function Home() {
  return (
    <div
      style={{
        width: "50%",
        display: "flex",
        justifyContent: "space-between",
        marginLeft: 100,
      }}
    >
      <Counter />
      <Users />
    </div>
  );
}
