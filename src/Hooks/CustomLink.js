import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{ margin: "0px 15px", color: match ? "#50e1e6" : "white", borderBottom: match ? "2px solid #50e1e6" : "2px solid #ffffff", borderRadius: "3px" }}
                to={to}>
                {children}
            </Link>
        </div>
    );
}
export default CustomLink;