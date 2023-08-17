import Header from "@components/Header";
import { useNavigate } from "react-router-dom";

export default function ProductListPage() {
  const navigate = useNavigate();
  return (
    <div>
      <Header title="商品列表" />
      <button
        onClick={() => {
          navigate("/11");
        }}
      >
        商品路徑
      </button>
    </div>
  );
}
