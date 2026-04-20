import { useParams, Link } from "react-router-dom";
import { companies } from "../../data/companies";

const CompanyBranches = () => {
  const { id } = useParams();

  const company = companies.find(c => c.id === id);

  return (
    <div>
      <h1>Sedes de {company.name}</h1>

      <ul>
        {company.branches.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>

      <Link to={`/empresas/${id}`}>Volver</Link>
    </div>
  );
};

export default CompanyBranches;