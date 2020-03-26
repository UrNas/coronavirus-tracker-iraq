import App from 'next/app'
import {BaseUrlContext} from '../components/baseurlcontext'
const baseUrl  = 'https://coronavirus-tracker-api.herokuapp.com/v2/locations'
import GitHubIcon from '@material-ui/icons/GitHub';
import '../static/main.css'


function MyApp({ Component, pageProps }) {
    return (
        <BaseUrlContext.Provider value={baseUrl}>
            <Component {...pageProps} />
            <footer>
                <span>
                    &copy;

                    جميع الحقوق محفوظة
                </span>
                <a style={{marginRight: '10px'}} href='https://github.com/UrNas/coronavirus-tracker-iraq'><GitHubIcon/></a>
            </footer>
        </BaseUrlContext.Provider>
    )
  }
  
  export default MyApp