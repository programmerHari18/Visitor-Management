import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: async () => {
            const m = await import('./component/visitor-form/visitor-form.component');
            return m.VisitorFormComponent;
        }
    },
    {
        path: 'login',
        loadComponent: async () => {
            const m = await import ('./component/login/login.component');
            return m.LoginComponent;
        },
    },
    {
        path: 'emailConfirmation',
        loadComponent: async () => {
            const m = await import ('./component/visitor-form/confirmation/confirmation.component');
            return m.ConfirmationComponent;
        },
    },
    {
        path: 'main',
        children: [
            {
                path: 'calendar',
                loadComponent: async () => {
                    const m = await import ('./component/visit-calendar/visit-calendar.component')
                    return m.VisitCalendarComponent;
                },
            },
            {
                path:'location/:id',
                loadComponent: async () => {
                    const m = await import ('./component/location/location.component');
                    return m.LocationComponent;
                }
            },
            {
                path:'location',
                loadComponent: async () => {
                    const m = await import ('./component/location/location.component');
                    return m.LocationComponent;
                }
            },
            {
                path:'approver/edit/:id',
                loadComponent: async () => {
                    const m = await import ('./component/approver/approver.component');
                    return m.ApproverComponent;
                }
            },
            {
                path:'approver/add',
                loadComponent: async () => {
                    const m = await import ('./component/approver/approver.component');
                    return m.ApproverComponent;
                }
            },
            {
                path:'approver',
                loadComponent: async () => {
                    const m = await import ('./component/approver-config/approver-config.component');
                    return m.ApproverConfigComponent;
                }
            },
            {
                path:'visitors',
                loadComponent: async () => {
                    const m = await import ('./component/visitor-list/visitor-list.component');
                    return m.VisitorListComponent;
                }
            },
            {
                path:'visitor/:id',
                loadComponent: async () => {
                    const m = await import ('./component/visitor-info/visitor-info.component');
                    return m.VisitorInfoComponent;
                }
            },
        ]
    }
];
