import { Link, useHistory  } from "react-router-dom";

function NotFoundPage(props) {
    
    
    return (
        <div className="not-found">
            <h3 className="not-found__title">
                404 <br></br><p className='not-found__subtitle'>Страница не найдена</p>
            </h3>
            
            <Link className="button button_type_to-main" onClick={props.handleBackClick}>Назад</Link>
        </div>
    )
}
export default NotFoundPage;