import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
  })
export class menuList{

    admin: any[] = [
        {
            title:'Dashboard',
            pageTitle:'Dashboard',
            icon:'dashboard',
            route:'/authenticated',
            type:'link'
        },
        {
            title:'Users',
            icon:'people_alt',
            pageTitle:'Users',
            route:'/authenticated/users',
            type:'link'
        },
        {
            title:'Perticulars',
            icon:'category',
            pageTitle:'Perticulars',
            route:'/authenticated/perticulars',
            type:'link'
        },
        {
            title:'sub Menus',
            icon:'view_list',
            route:'',
            type:'sub',
            children:[
                {
                    title:'Perticulars',
                    icon:'category',
                    pageTitle:'Perticulars',
                    route:'/authenticated/perticulars',
                    type:'link'
                },
                {
                    title:'Users',
                    icon:'people_alt',
                    pageTitle:'Users',
                    route:'/authenticated/users',
                    type:'link',
                    children:[
                        {
                            title:'Perticulars',
                            icon:'category',
                            pageTitle:'Perticulars',
                            route:'/authenticated/perticulars',
                            type:'link'
                        },
                        {
                            title:'Users',
                            icon:'people_alt',
                            pageTitle:'Users',
                            route:'/authenticated/users',
                            type:'link'
                        },
                    ]
                },
            ]
        },
        {
            title:'sub Menus 2',
            icon:'view_list',
            route:'',
            type:'sub',
            children:[
                {
                    title:'Perticulars',
                    icon:'category',
                    pageTitle:'Perticulars',
                    route:'/authenticated/perticulars',
                    type:'link'
                },
                {
                    title:'Users',
                    icon:'people_alt',
                    pageTitle:'Users',
                    route:'/authenticated/users',
                    type:'link'
                },
            ]
        },
        {
            title:'Perticulars',
            icon:'category',
            pageTitle:'Perticulars',
            route:'/authenticated/perticulars',
            type:'link'
        },
        {
            title:'Perticulars',
            icon:'category',
            pageTitle:'Perticulars',
            route:'/authenticated/perticulars',
            type:'link'
        },
    ];

}