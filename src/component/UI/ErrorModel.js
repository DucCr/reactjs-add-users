import classes from './ErrorModel.module.css';
import Card from './Card';
import Button from './Button';
const ErrorModel = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.onConfirm}>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h3>{props.title}</h3>
                </header>
                
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>

                <footer className={classes.actions}>
                    <Button>Okey</Button>
                </footer>
            </Card>
        </div>
    )
}
export default ErrorModel;