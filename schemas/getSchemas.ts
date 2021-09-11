export const RandomPostCodes = {
  type: 'object',
  required: ['status', 'result'],
  properties: {
    status: {
      type: 'number'
    },
    result: {
      type: 'object',
      required: ['postcode', 'codes'],
      properties: {
        postcode: {
          type: 'string'
        },
        quality: {
          type: 'number'
        },
        eastings: {
          type: 'number'
        },
        northings: {
          type: 'number'
        },
        country: {
          type: 'string'
        },
        nhs_ha: {
          type: 'string'
        },
        longitude: {
          type: 'number'
        },
        latitude: {
          type: 'number'
        },
        european_electoral_region: {
          type: 'string'
        },
        primary_care_trust: {
          type: 'string'
        },
        region: {
          type: ['string', 'null']
        },
        lsoa: {
          type: 'string'
        },
        msoa: {
          type: ['string', 'null']
        },
        incode: {
          type: 'string'
        },
        outcode: {
          type: 'string'
        },
        parliamentary_constituency: {
          type: 'string'
        },
        admin_district: {
          type: 'string'
        },
        parish: {
          type: ['string', 'null']
        },
        admin_county: {
          type: ['string', 'null']
        },
        admin_ward: {
          type: 'string'
        },
        ced: {
          type: ['string', 'null']
        },
        ccg: {
          type: 'string'
        },
        nuts: {
          type: 'string'
        },
        codes: {
          type: 'object',
          properties: {
            admin_district: {
              type: 'string'
            },
            admin_county: {
              type: ['string', 'null']
            },
            admin_ward: {
              type: 'string'
            },
            parish: {
              type: 'string'
            },
            parliamentary_constituency: {
              type: 'string'
            },
            ccg: {
              type: 'string'
            },
            ccg_id: {
              type: 'string'
            },
            ced: {
              type: 'string'
            },
            nuts: {
              type: 'string'
            },
            lsoa: {
              type: 'string'
            },
            msoa: {
              type: ['string', 'null']
            },
            lau2: {
              type: 'string'
            }
          }
        }
      }
    }
  }
};

export const ArrayOfCodes = {
  type: 'object',
  properties: {
    status: {
      type: 'number'
    },
    result: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          query: {
            type: 'string'
          },
          result: RandomPostCodes['properties']['result']
        }
      }
    }
  }
};

export const ErrorSchema = {
  type: 'object',
  required: ['status', 'error'],
  properties: {
    status: {
      type: 'number'
    },
    error: {
      type: 'string'
    }
  }
};
