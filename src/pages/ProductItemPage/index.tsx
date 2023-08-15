import {
  useParams,
} from "react-router-dom";

export default function ProductItemPage() {
  const { id } = useParams();
  return (
    <div>{id}</div>
  )
}