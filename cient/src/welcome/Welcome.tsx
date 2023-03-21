import {memo} from "react";
import {Link, Outlet} from "react-router-dom";

export const Welcome = memo(() => {
    return (
        <div>
            <h2>Welcome on the sandbox</h2>
            <nav>
                <ul style={{textAlign: "start"}}>
                    <li>
                        <Link to={``}>Web socket sample</Link>
                    </li>
                    <li>
                        <Link to={`rest`}>Rest api sample</Link>
                    </li>
                </ul>
            </nav>
            <div style={{border: "1px solid red", padding: "2em"}}>
                <Outlet/>
            </div>
        </div>
    )
});
Welcome.displayName = "Welcome";