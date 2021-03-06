import { useEffect } from "react";
import { Link, useHistory  } from "react-router-dom";

function NotFoundPage(props) {
    const history = useHistory();
    const handleBackClick = () => {
        console.log('клик')
        console.log(props.isLoggedIn)
        history.go(-2)
    }
    useEffect(() => {
        console.log(history)
    })
    return (
        <div className="not-found">
            <h3 className="not-found__title">
                404 <br></br><p className='not-found__subtitle'>Страница не найдена</p>
            </h3>
            
            <button className="button button_type_to-main" onClick={handleBackClick}>Назад</button>
        </div>
    )
}
export default NotFoundPage;