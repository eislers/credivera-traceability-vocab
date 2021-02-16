const fs = require('fs');
const path = require('path');
const issuer = require('../services/issuer');

it('can issue / verify Crude Oil Product', async () => {
  const { verified, verifiableCredential } = await issuer.issue({
    credentialSubject: {
      HSCode: '270900',
      UWI: '100.12-04-091-05-W5.00',
      manufactureLocation: {
        type: 'Place',
        address: 'Edmonton, CAN',
        latitude: '53.5461',
        longitude: '113.4938',
      },
      productionDate: '2020-03-30',
      product: {
        type: 'Product',
        manufacturer: {
          type: 'Organization',
          name: 'Crude Oil Producer',
        },
        name: 'Heavy Sour Dilbit',
        sizeOrAmount: {
          type: 'MeasuredValue',
          unitCode: 'bbl',
          value: '10000',
        },
        description: 'Crude oil stream, produced from diluted bitumen.',
      },
      observation: [
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'api Gravity',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '21',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'viscosityAt10C',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '302',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'viscosityAt20C',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '157',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'viscosityAt30C',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '89.6',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'viscosityAt40C',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '55.3',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'viscosityAt45C',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '44.4',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'pourPoint',
          },
          measurement: {
            unitCode: '',
            value: '-30',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'vapourPressure',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '51.7',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'density',
          },
          measurement: {
            unitCode: '',
            value: '928',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'naphtha',
          },
          measurement: {
            unitCode: '',
            value: '51.7',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'distillateAt350To650F',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '51.7',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'gasOilAt650To980F',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '51.7',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'residAt980F',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '41',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'deemedButane',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '1.9',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'tan',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '1.05',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'ron',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '51.7',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'mon',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '51.7',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'boilingPoint',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '51.7',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'freezingPoint',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '51.7',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'criticalTemperature',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '51.7',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'criticalPressure',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '51.7',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'autoIgnitionTemperatureInAirAt1atm',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '51.7',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'solubilityInTrichloroethylene',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '51.7',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'penetrationAt25C100g5sec',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '51.7',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'softeningPoint',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '51.7',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'ductilityAt25C',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'olefin',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'color',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'odor',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'grossCalorificValueAt15C',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'netCalorificValueAt15C',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'airRequiredForCombustion',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'copperCorrosionAt38CFor1Hour',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'microCarbonResidue',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '9.68',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'aromaticsTotalBTEX',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '0.23',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'sedimentAndWater',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '188',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'liquidPhaseH2S',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'mercury',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'oxygenates',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'filterableSolids',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'phosphorousVolatile',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'mediumChainTriglycerides',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'benzene',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'particulates',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'organicChlorides',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'nickel',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '54',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'vanadium',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '132.5',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'water',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'molecularWeight',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'sulphur',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '3.66',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'naphthenes',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'chloride',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'arsenic',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'lead',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'ethene',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'propane',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'isoButane',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'nButane',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'hydrocarbonsHeavier',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'unsaturatedHydrocarbons',
          },
          measurement: {
            type: 'MeasuredValue',
            unitCode: '',
            value: '',
          },
        },
      ],
    },
  },
  [
    'https://www.w3.org/2018/credentials/v1',
    'https://w3id.org/traceability/v1',
  ]);
  expect(verified).toBe(true);
  fs.writeFileSync(path.resolve(__dirname, '../../../docs/credentials/CrudeProductCredential.json'), JSON.stringify(verifiableCredential, null, 2));
});
