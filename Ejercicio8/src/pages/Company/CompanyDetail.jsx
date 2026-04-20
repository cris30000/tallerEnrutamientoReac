import { useParams, Link } from "react-router-dom";
import { companies } from "../../data/companies";

const CompanyDetail = () => {
  const { id } = useParams();

  const company = companies.find(c => c.id === id);

  if (!company) return <p>Empresa no encontrada</p>;

  return (
    <div>
      <h1>{company.name}</h1>

      <Link to={`/empresas/${company.id}/sedes`}>
        Ver sedes
      </Link>
    </div>
  );
};

export default CompanyDetail;