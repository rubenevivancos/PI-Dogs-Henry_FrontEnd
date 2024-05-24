import { Link } from 'react-router-dom';

import './landingPage.css';


export default function LandingPage() { 
    return(
        <div className="landing">
            <div>
                <table width="100%">
                    <tbody>
                        <tr>
                            <td>
                                <span className="landing_title">
                                    BIENVENIDO
                                </span>
                            </td>
                        </tr>
                        <tr align="center">
                            <td>
                                <Link to="/dogs" className="enter">
                                    ENTRAR
                                </Link>                           
                            </td>
                        </tr>   
                    </tbody>    
                </table>
            </div>
        </div>    
    )
}