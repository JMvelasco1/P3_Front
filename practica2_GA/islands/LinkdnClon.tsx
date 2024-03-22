import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.2/src/index.js";
import { Jobs } from "../types.ts";


 const LinkdnClon:FunctionComponent<Jobs> = (props) => {

const {jobs} = props;

return (
<>
  <div>
  <h2>Empleos encontrados</h2>
  <p>Explora empleos dentro de tu network</p>
    {jobs.map((elem)=>{
      return(
      <>
        <div class="columnaizq">
          {<h3>{elem.title}</h3>}
          {<h4>{elem.company_name}</h4>}
          
          <><button onClick={()=>{
            <a href= {elem.url}></a>  
          }}>Solicitar</button></>
        </div>
      
      </>);
    })}
  </div>
</>

)
}

export default LinkdnClon;