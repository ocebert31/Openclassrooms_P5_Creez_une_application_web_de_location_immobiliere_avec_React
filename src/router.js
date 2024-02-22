import { createBrowserRouter, Link } from "react-router-dom";

const ErrorElement = () => (
    <div>
      Page introuvable
    </div>
  );

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>
            Page d'accueil 
            <nav>
                <Link to="/a-propos">A propos</Link>
                <Link to="/location">Page de location</Link>
            </nav>
        </div>
    },
    {
        path: "/location",
        element: <div>
            Page de location
            <nav>
                <Link to="/">Page d'accueil</Link>
                <Link to="/a-propos">A propos</Link>
            </nav>
        </div>
    },
    {
        path: "/a-propos",
        element: <div>
            A propos
            <nav>
                <Link to="/">Page d'accueil</Link>
                <Link to="/location">Page de location</Link>
            </nav>
        </div>
    },
    {
        path: "/error",
        element: <div>
            Page introuvable
        </div>
    },
    {
        path: "*",
        element: <ErrorElement />
    }
])

export default router;