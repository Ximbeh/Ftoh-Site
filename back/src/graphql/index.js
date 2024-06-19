import { makeExecutableSchema } from '@graphql-tools/schema';
import _ from 'lodash';

import { TypeDefs as ChampionshipTypeDefs, resolvers as championshipResolvers } from './modals/championships.js';
import { TypeDefs as SeasonTypeDefs, resolvers as seasonResolvers } from './modals/seasons.js';
import { TypeDefs as NewsTypeDefs, resolvers as newsResolvers } from './modals/news.js';
import { TypeDefs as TeamTypeDefs, resolvers as teamResolvers } from './modals/teams.js';
import { TypeDefs as DriverTypeDefs, resolvers as driverResolvers } from './modals/drivers.js';
import { TypeDefs as CalendarTypeDefs, resolvers as calendarResolvers } from './modals/calendars.js';
import { TypeDefs as RaceTypeDefs, resolvers as raceResolvers } from './modals/races.js';
import { TypeDefs as PhaseTypeDefs, resolvers as phaseResolvers } from './modals/phases.js';
import { TypeDefs as ResultTypeDefs, resolvers as resultResolvers } from './modals/results.js';
import { TypeDefs as HighlightTypeDefs, resolvers as highlightResolvers } from './modals/highlights.js';
import { TypeDefs as TeamHistoryTypeDefs, resolvers as teamHistoryResolvers } from './modals/teamHistories.js';
import { TypeDefs as DriverHistoryTypeDefs, resolvers as driverHistoryResolvers } from './modals/driverHistories.js';

const Query = `
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

const resolvers = {};

export const schema = makeExecutableSchema({
  typeDefs: [
    Query,
    ChampionshipTypeDefs,
    SeasonTypeDefs,
    NewsTypeDefs,
    TeamTypeDefs,
    DriverTypeDefs,
    CalendarTypeDefs,
    RaceTypeDefs,
    PhaseTypeDefs,
    ResultTypeDefs,
    HighlightTypeDefs,
    TeamHistoryTypeDefs,
    DriverHistoryTypeDefs,
  ],
  resolvers: _.merge(
    resolvers,
    championshipResolvers,
    seasonResolvers,
    newsResolvers,
    teamResolvers,
    driverResolvers,
    calendarResolvers,
    raceResolvers,
    phaseResolvers,
    resultResolvers,
    highlightResolvers,
    teamHistoryResolvers,
    driverHistoryResolvers,
  ),
});

export default schema;