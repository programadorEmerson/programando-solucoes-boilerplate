import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = () => {
  const token =
    'pk.eyJ1IjoicHJvZ3JhbWFkb3JlbWVyc29uIiwiYSI6ImNra2UwZGh1NDA2Z2syd3A3YnNtZDI4cngifQ.PQKV7NSg34g3-1MsL3qi0Q'
  const urlBase = `https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token=${token}`
  const atribuicao =
    'copy <a href="http://programandosolucoes.com.br">PROGRAMANDO SOLUÇÕES</a>'

  return (
    <MapContainer
      center={[0, 0]}
      zoom={3}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer attribution={atribuicao} url={urlBase} />
      <Marker position={[0, 0]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
