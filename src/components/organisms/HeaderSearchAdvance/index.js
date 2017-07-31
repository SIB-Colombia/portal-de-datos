import React from 'react'
import styled from 'styled-components'
import Checkbox from 'material-ui/Checkbox'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'
import _ from 'lodash'
import { size } from 'styled-theme'

const Wrapper = styled.div`
  column-count: 3;
  @media ${size('xs')}{
    column-count: 2;
  }
  @media ${size('sm')}{
    column-count: 2;
  }

  .box {
    padding: 2px;
  }
`

class HeaderSearchAdvance extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      files: 1,
      search: 1,
      biologicalGroup: 1,
      departments: 1,
      ecosystem: 1,
      stateThreat: 1,
      range: 1,
      orderBy: 1,
      license: 1,
    }

    this.filters = {
      grupos_biologicos: [
        {
          name: 'Reino',
          groups: [
            { name: 'Animales', q: 'kingdomName=Animalia' },
            { name: 'Plantas', q: 'kingdomName=Plantae' },
            { name: 'Hongos', q: 'kingdomName=Fungi' },
            { name: 'Bacterias', q: 'kingdomName=Bacteria' },
            { name: 'Protozoos', q: 'kingdomName=Protozoa' },
            { name: 'Arquea', q: 'kingdomName=Archaea' },
            { name: 'Virus', q: 'kingdomName=Viruses' },
          ],
        },
        {
          name: 'Grupos de Animales',
          groups: [
            { name: 'Mamíferos', q: 'className=Mammalia' },
            { name: 'Aves', q: 'className=Aves' },
            { name: 'Reptiles', q: 'className=Reptilia' },
            { name: 'Anfibios', q: 'className=Amphibia' },
            { name: 'Peces', q: 'className=Actinopterygii&className=Sarcopterygii&className=Elasmobranchii&className=Chondrichthyes' },
            { name: 'Insectos', q: 'className=Insecta' },
            { name: 'Escarabajos', q: 'orderName=Coleoptera' },
            { name: 'Mariposas', q: 'orderName=Lepidoptera' },
            { name: 'Hormigas', q: 'familyName=Formicidae' },
            { name: 'Abejas', q: 'familyName=Apidae&familyName=Colletidae&familyName=Halictidae' },
            { name: 'Moscas y zancudos', q: 'orderName=?Diptera' },
            { name: 'Arácnidos', q: 'className=Arachnida' },
            { name: 'Moluscos', q: 'phylumName=Mollusca' },
            { name: 'Decápodos', q: 'orderName=Decapoda' },
            { name: 'Equinodermos', q: 'phylumName=Echinodermata' },
            { name: 'Esponjas', q: 'phylumName=Porifera' },
            { name: 'Corales y afines', q: 'className=Anthozoa&className=Hydrozoa' },
          ],
        },
        {
          name: 'Grupos de Plantas',
          groups: [
            { name: 'Orquídeas', q: 'familyName=Orchidaceae' },
            { name: 'Magnolias y afines', q: 'familyName=Magnoliaceae&familyName=Podocarpaceae&familyName=Myristicaceae' },
            { name: 'Palmas', q: 'familyName=Arecaceae' },
            { name: 'Frailejones', q: 'genusName=Carramboa&genusName=Coespeletia&genusName=Espeletia,Espeletiopsis&genusName=Libanothamnus&genusName=Paramiflos&genusName=Ruilopezia,Tamania' },
            { name: 'Cactus', q: 'familyName=Cactaceae' },
            { name: 'Bromelias, labiadas y pasifloras', q: 'familyName=Bromeliaceae&familyName=Labiatae&familyName=Passifloraceae' },
            { name: 'Fanerógamas', q: 'familyName=Chrysobalanaceae&familyName=Dichapetalaceae&familyName=Lecythidaceae' },
            { name: 'Helechos y afines', q: 'className=Polypodiopsida&className=Lycopodiopsida&className=Equisetopsida&className=Psilotopsida&className=Marattiopsida' },
            { name: 'Zamias', q: 'familyName=Zamiaceae' },
            { name: 'Musgos y afines', q: 'phylumName=Bryophyta&phylumName=Hepaticophyta&phylumName=Anthocerophyta&phylumName=Marchantiophyta' },
          ],
        },
      ],
      explorador_geografico: [
        {
          name: 'País',
          groups: [
            { name: 'Colombia', q: 'true' },
            { name: 'Otros países', q: 'false' },
          ],
        },
        {
          name: 'Departamento',
          groups: [
            { name: 'Amazonas', q: 'true' },
            { name: 'Antioquia', q: 'true' },
            { name: 'Arauca', q: 'true' },
            { name: 'Archipiélago de San Andrés, Providencia y Santa Catalina', q: 'true' },
            { name: 'Atlántico', q: 'true' },
            { name: 'Bogotá, D.C.', q: 'true' },
            { name: 'Bolívar', q: 'true' },
            { name: 'Boyacá', q: 'true' },
            { name: 'Caldas', q: 'true' },
            { name: 'Caquetá', q: 'true' },
            { name: 'Casanare', q: 'true' },
            { name: 'Cauca', q: 'true' },
            { name: 'Cesar', q: 'true' },
            { name: 'Chocó', q: 'true' },
            { name: 'Córdoba', q: 'true' },
            { name: 'Cundinamarca', q: 'true' },
            { name: 'Guainía', q: 'true' },
            { name: 'Guaviare', q: 'true' },
            { name: 'Huila', q: 'true' },
            { name: 'La Guajira', q: 'true' },
            { name: 'Magdalena', q: 'true' },
            { name: 'Meta', q: 'true' },
            { name: 'Nariño', q: 'true' },
            { name: 'Norte de Santander', q: 'true' },
            { name: 'Putumayo', q: 'true' },
            { name: 'Quindío', q: 'true' },
            { name: 'Risaralda', q: 'true' },
            { name: 'Santander', q: 'true' },
            { name: 'Sucre', q: 'true' },
            { name: 'Tolima', q: 'true' },
            { name: 'Valle del Cauca', q: 'true' },
            { name: 'Vaupés', q: 'true' },
            { name: 'Vichada', q: 'true' },
          ],
        },
      ],
      tipos_registro: [
        {
          name: 'Base del registro',
          groups: [
            { name: 'Observaciones humanas', q: 'basisOfRecord=HumanObservation' },
            { name: 'Observaciones con máquina', q: 'basisOfRecord=MachineObservation' },
            { name: 'Especímenes en colecciones', q: 'basisOfRecord=PreservedSpecimen' },
          ],
        },
      ],
    }
  }

  handleClick() {
  }

  render() {

    const filter = (
      _(this.filters).forEach((value, key) => (
        _(value).forEach((value) => (
          <Wrapper>
            <Subheader><strong>Taxonomía</strong></Subheader>
            {
              _(value.groups).forEach((value, key) => (
                <Checkbox label={value.name} />
              ))
            }
          </Wrapper>
        ))
      ))
    )
    return (
      <Wrapper>
        {
          _.map(this.filters, (value) => (
            _.map(value, (row, key) => (
              <div key={key}>
                <Subheader>{row.name}</Subheader>
                <div className="box">
                  <Divider inset />
                  {
                    _.map(row.groups, (column, key) => (
                      <Checkbox key={key} label={column.name} name={column.name} value={column.q} onClick={this.handleClick} />
                    ))
                  }
                </div>
              </div>
            ))
          ))
        }
      </Wrapper>
    )
  }
}

export default HeaderSearchAdvance
