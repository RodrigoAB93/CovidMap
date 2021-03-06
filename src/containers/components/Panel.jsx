import React,{memo} from 'react' 
import RefreshIcon from '../../assets/images/refresh.svg'   
import {Card,Typography,Button, Select,MenuItem} from '../../components' 
import COUNTRIES from '../../commons/constantes/countries'
import {CardPanelContentStyled, ItemStyled} from './style' 

const navigatorHasShare = navigator.share 

function Panel({ updateAt, onChange, data, country, getCoviddata }) {
  const { cases, recovered, deaths, todayCases, todayDeaths } = data

  
  const renderCountries = (country, index) => (
    <MenuItem key={`country-${index}`} value={country.value}>
      <ItemStyled>
        <div>{country.label}</div>
        <img src={country.flag} alt={`País-${country.label}`} />
      </ItemStyled>
    </MenuItem>
  )

  return( 
    <Card> 
      <CardPanelContentStyled> 
        <div>
          <Typography variant="h5" component="span" color="primary">Covid Map</Typography> 
          <Typography variant="h6" component="span" color="primary">Painel Coronavírus</Typography> 
          <Typography variant="h4" component="span" color="primary">Atualizado em: {updateAt}</Typography> 
          <div className="pt-2">
              <Select onChange={onChange} value={country}> 
                  {COUNTRIES.map(renderCountries)}
              </Select>
          </div>
        </div>
      </CardPanelContentStyled>
    </Card>
  )
}
export default memo(Panel)