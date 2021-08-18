import { Link } from "react-router-dom";
function NotFoundPage() {
    return (
        <div className="not-found">
            <h3 className="not-found__title">
                404 <br></br><p className='not-found__subtitle'>Страница не найдена</p>
            </h3>
            
            <Link className="button button_type_to-main" to="/">Назад</Link>
        </div>
    )
}
export default NotFoundPage;