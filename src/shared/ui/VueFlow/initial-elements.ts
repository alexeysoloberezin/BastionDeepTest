export default function useDataSimulation() {
    const initialPos = { x: 400, y: 200 } // Центральная позиция
    const type = 'process'
    const nodeSpacingY = 50
    const nodesPerRow = 5
    const nodeSpacingX = 120 // Расстояние по X

    // Функция для расчета позиций узлов в сетке
    const calculateGridPosition = (index: number) => {
        const row = Math.floor(index / nodesPerRow)
        const col = index % nodesPerRow
        return {
            x: 20 + (col * nodeSpacingX),
            y: 100 + (row * nodeSpacingY) // Отступ от главного узла
        }
    }

    // Функция для расчета высоты группы
    const calculateGroupHeight = (nodeCount: number) => {
        const padding = 20 // 20px сверху и снизу
        const rows = Math.ceil(nodeCount / nodesPerRow)
        return 100 + (rows * nodeSpacingY) + padding
    }

    const childNodes = [
        {
            id: '2',
            position: calculateGridPosition(0),
            type,
            data: { status: null, ip: '192.168.1.1' },
            parentNode: 'group-1',
        },
        {
            id: '3',
            position: calculateGridPosition(1),
            type,
            data: { status: null, ip: '192.168.1.2' },
            parentNode: 'group-1',
        },
        {
            id: '4',
            position: calculateGridPosition(2),
            type,
            data: { status: null, ip: '192.168.1.3' },
            parentNode: 'group-1',
        },
        {
            id: '5',
            position: calculateGridPosition(3),
            type,
            data: { status: null, ip: '192.168.1.4' },
            parentNode: 'group-1',
        },
        {
            id: '6',
            position: calculateGridPosition(4),
            type,
            data: { status: null, ip: '192.168.1.5' },
            parentNode: 'group-1',
        },
        {
            id: '7',
            position: calculateGridPosition(5),
            type,
            data: { status: null, ip: '192.168.1.6' },
            parentNode: 'group-1',
        },
        {
            id: '8',
            position: calculateGridPosition(6),
            type,
            data: { status: null, ip: '192.168.1.7' },
            parentNode: 'group-1',
        },
        {
            id: '9',
            position: calculateGridPosition(7),
            type,
            data: { status: null, ip: '192.168.1.8' },
            parentNode: 'group-1',
        },
        {
            id: '10',
            position: calculateGridPosition(8),
            type,
            data: { status: null, ip: '192.168.1.9' },
            parentNode: 'group-1',
        },
        {
            id: '11',
            position: calculateGridPosition(9),
            type,
            data: { status: null, ip: '192.168.1.10' },
            parentNode: 'group-1',
        },
        {
            id: '12',
            position: calculateGridPosition(10),
            type,
            data: { status: null, ip: '192.168.1.11' },
            parentNode: 'group-1',
        },
        {
            id: '13',
            position: calculateGridPosition(11),
            type,
            data: { status: null, ip: '192.168.1.12' },
            parentNode: 'group-1',
        },
        {
            id: '14',
            position: calculateGridPosition(12),
            type,
            data: { status: null, ip: '192.168.1.13' },
            parentNode: 'group-1',
        },
        {
            id: '15',
            position: calculateGridPosition(13),
            type,
            data: { status: null, ip: '192.168.1.14' },
            parentNode: 'group-1',
        },
        {
            id: '16',
            position: calculateGridPosition(14),
            type,
            data: { status: null, ip: '192.168.1.15' },
            parentNode: 'group-1',
        },
        {
            id: '17',
            position: calculateGridPosition(15),
            type,
            data: { status: null, ip: '192.168.1.16' },
            parentNode: 'group-1',
        },
        {
            id: '18',
            position: calculateGridPosition(16),
            type,
            data: { status: null, ip: '192.168.1.17' },
            parentNode: 'group-1',
        },
        {
            id: '19',
            position: calculateGridPosition(17),
            type,
            data: { status: null, ip: '192.168.1.18' },
            parentNode: 'group-1',
        },
        {
            id: '20',
            position: calculateGridPosition(18),
            type,
            data: { status: null, ip: '192.168.1.19' },
            parentNode: 'group-1',
        },
    ]

    const initialNodes = [
        {
            id: '1',
            position: initialPos,
            type,
            data: { status: null },
        },
        {
            id: 'group-1',
            type: 'group',
            position: { x: initialPos.x + 200, y: initialPos.y },
            style: {
                width: '660px',
                height: `${calculateGroupHeight(childNodes.length)}px`,
                backgroundColor: 'rgba(45, 55, 72, 0.2)',
                border: '1px solid #4a5568',
                borderRadius: '8px',
                padding: '20px',
            },
            data: { label: 'DC' },
        },
        ...childNodes
    ]

    const initialEdges = [
        { id: 'e1-2', source: '1', target: '2' },
        { id: 'e1-3', source: '1', target: '3' },
        { id: 'e1-4', source: '1', target: '4' },
        { id: 'e1-5', source: '1', target: '5' },
        { id: 'e1-6', source: '1', target: '6' },
        { id: 'e1-7', source: '1', target: '7' },
        { id: 'e1-8', source: '1', target: '8' },
        { id: 'e1-9', source: '1', target: '9' },
        { id: 'e1-10', source: '1', target: '10' },
        { id: 'e1-11', source: '1', target: '11' },
        { id: 'e1-12', source: '1', target: '12' },
        { id: 'e1-13', source: '1', target: '13' },
        { id: 'e1-14', source: '1', target: '14' },
        { id: 'e1-15', source: '1', target: '15' },
        { id: 'e1-16', source: '1', target: '16' },
        { id: 'e1-17', source: '1', target: '17' },
        { id: 'e1-18', source: '1', target: '18' },
        { id: 'e1-19', source: '1', target: '19' },
        { id: 'e1-20', source: '1', target: '20' },
    ]

    return { initialEdges, initialNodes }
}