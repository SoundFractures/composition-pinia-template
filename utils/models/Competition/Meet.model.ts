import { ID, NumberNull, StringNull } from '~/utils/models/index'

export const resource = `/competition/meet`
export type Meet = ID & {
  state: number
  // General data
  name: string
  nameEn: StringNull
  city: StringNull
  cityEn: StringNull
  nation: number
  course: NumberNull // ENUM - Meet.course
  entryType: NumberNull // ENUM - Meet.entryType
  swrid: StringNull
  resultUrl: StringNull

  // Entry deadlines & start
  entryDeadline: StringNull
  entryDeadlineTime: StringNull
  entryStartDate: StringNull
  entryWithdraw: StringNull
  maxEntriesIndividual: NumberNull
  maxEntriesRelay: NumberNull
  ageCalculation: {
    calculatioType: number
    calculationDate: StringNull
  }

  // Org / Host stuff
  hostClub: StringNull
  hostClubUrl: StringNull
  organizer: StringNull
  organizerUrl: StringNull

  // Other
  altitude: NumberNull
  reserveCount: NumberNull
  startMethod: StringNull
  timing: NumberNull // ENUM - Meet.timing
  type: StringNull
  // number: StringNull
}
