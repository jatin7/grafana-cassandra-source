import {QueryCtrl} from 'grafana/app/plugins/sdk';
//import './css/query-editor.css';

export class CassandraQueryCtrl extends QueryCtrl {
  static templateUrl = 'partials/query.editor.html';

  scope: any;

  /** @ngInject */
  constructor($scope, $injector) {
    super($scope, $injector);

    this.scope = $scope;
    this.target.target = this.target.target || 'select timestamp, value from keyspace.table where id=123e4567;';
    this.target.type = this.target.type || 'timeserie';
  }

  // getOptions(query) {
  //   return this.datasource.metricFindQuery(query || '');
  // }

  toggleEditorMode() {
    this.target.rawQuery = !this.target.rawQuery;
  }

  onChangeInternal() {
    this.panelCtrl.refresh();
  }
}
