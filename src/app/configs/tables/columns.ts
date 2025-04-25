import API_ROUTES from "@shared/api/utils/apiRoutes";
import formatDateTime from "@shared/services/dates/formatedDateTime";

const TABLE_COLUMNS: Record<string, { key: string, name: string, format?: any }[]> = {
    [API_ROUTES.attack]: [{
        key: 'cidrip',
        name: 'cidrip'
    }, {
        key: 'cidrmask',
        name: 'cidrmask'
    }, {
        key: 'starttime',
        format: (v: string) => formatDateTime(v),
        name: 'Время старта'
    }, {
        key: 'endtime',
        format: (v: string) => formatDateTime(v),
        name: 'Время завершения'
    }, {
        key: 'user',
        name: 'Пользователь'
    }],
    [API_ROUTES.dc]: [{
        key: 'id',
        name: 'ID'
    }, {
        key: 'ip',
        name: 'IP'
    }, {
        key: 'dc',
        name: 'dc'
    }],
    [API_ROUTES.certvuln]: [{
        key: 'id',
        name: 'ID'
    }, {
        key: 'type',
        name: 'Тип'
    }, {
        key: 'vulnInfo',
        name: 'vulnInfo'
    }],
    [API_ROUTES.filevuln]: [{
        key: 'id',
        name: 'ID'
    }, {
        key: 'link',
        name: 'Ссылка'
    }, {
        key: 'path',
        name: 'Путь'
    }, {
        key: 'vuln',
        name: 'vuln'
    }],
    [API_ROUTES.groupvuln]: [{
        key: 'id',
        name: 'ID'
    }, {
        key: 'vuln',
        name: 'vuln'
    }],
    [API_ROUTES.kerberos]: [{
        key: 'id',
        name: 'ID'
    }, {
        key: 'type',
        name: 'Тип'
    }, {
        key: 'vulnInfo',
        name: 'vulnInfo'
    }],
}

export default TABLE_COLUMNS