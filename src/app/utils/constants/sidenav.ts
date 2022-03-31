export const MENU_OPTIONS = [
    { title: 'MOVEMENTS.TITLE', route: '/movements', icon: 'search' },
    { title: 'CATEGORIES.TITLE', route: '/categories', icon: 'category' },
    { title: 'TYPES.TITLE', route: '/types', icon: 'assignment' },
    {
        title: 'REPORTS.TITLE',
        icon: 'insert_drive_file',
        options: [
            { title: 'MOVEMENTS.TITLE', route: '/reports/month-year', icon: 'search' },
            { title: 'CATEGORIES.TITLE', route: '/reports/category', icon: 'category' },
            { title: 'TYPES.TITLE', route: '/reports/type', icon: 'assignment' },
        ]
    },
];
