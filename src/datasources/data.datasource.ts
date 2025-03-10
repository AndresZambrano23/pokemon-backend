import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'data',
  connector: 'mysql',
  url: '',
  host: 'localhost',
  port: 0,
  user: 'root',
  password: 'A3103499677cz',
  database: 'pokemon'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DataDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'data';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.data', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
