import React, { useState } from 'react';
import { API_ROUTES } from "../../../utils/constants";
import DataTable from "../../../components/ui/DataTable";
import { useNavigate } from "react-router-dom";
import AuthService from "../../../services/AuthService";
import BillService from "../../../services/BillService";
import Invoice from "./Invoice";
import PayBillComponent from "./PayBillComponent";

function PatientBills(props: any) {
    const navigate = useNavigate();
    const permission = AuthService.getPermission('PATIENT_BILL');
    const [data, setDate] = useState([]);
    const [refresh, doRefresh] = useState(0);
    const [action, setAction] = useState('none');
    const [bill, setBill] = useState<any>({});
    const pageSizes = [100, 200, 500, 1000, 10000];

 
    
    const payHandler = (e: any) => {
        setBill(JSON.parse(e.target.dataset.record));
        setAction('pay');

    }
    const viewHandler = (e: any) => {
        setBill(JSON.parse(e.target.dataset.record));
        setAction('view')
    }

    const cancelHandler = (e: any) => {
        setAction('none');
    }

    const successHandler = (e: any) => {
        setAction('none');
        doRefresh(1);
    }

    const rowActions = (row: any) => {
        return (
            <>
                {row.status !== 'PAID' && permission.pay ?
                    <button type="button" className="btn btn-info btn-xss box-shadow-1"
                        data-record={JSON.stringify(row)} onClick={payHandler}>
                        <i className="ft-shopping-cart mr-05"></i>Pay
                    </button> : ""
                }
                {permission.view ? <button type="button" className="btn btn-success btn-xss box-shadow-1"
                    data-record={JSON.stringify(row)} onClick={viewHandler}>
                    <i className="ft-eye"></i> Bill
                </button> : ''}
            </>);
    }

    const statusRender = (row: any) => {
        let badgeStyle = 'badge-light';
        switch (row.status) {
            case "GENERATED":
                badgeStyle = 'badge-primary';
                break;
            case "PAYMENT_DUE":
                badgeStyle = 'badge-danger';
                break;
            case "PARTIALLY_PAID":
                badgeStyle = 'badge-warning';
                break;
            case "PAID":
                badgeStyle = 'badge-success';
                break;
        }
        return (<div className={`badge ${badgeStyle}`}>{row.status}</div>);
    }


    const columns: {}[] = [
        { data: "index", name: "SL", sortable: true, class: "text-center px-1" },
        // { data: "patientId", name: "Patient Id", class: "px-2 text-center", sort: true },
        // { data: "createdDate", name: "Date", class: "text-center px-1 dateCreated", sort: true },
        { data: "patientName", name: "Patient Name", class: "px-1 text-center" },
        { data: "agentOrAgencyName", name: "Agency / Agent", class: "px-1 text-center", sort: true },
        { data: "billNo", name: "Bill No", sortable: true, class: "", sort: true },
        { data: "passportNo", name: "Passport #", class: "text-center px-1" },
        { data: "regNo", name: "Patient Id", class: "text-center px-1" },
        { data: "amount", name: "Amount", class: "text-center px-1", calculateSum: true, currency: true, sort: true },
        { data: "commission", name: "Commission", class: "px-1 text-center", calculateSum: true, currency: true, sort: true },
        { data: "paid", name: "Paid", class: "px-1 text-center", calculateSum: true, currency: true, sort: true },
        { data: "due", name: "Due", class: "px-1 text-center", calculateSum: true, currency: true, sort: true },
        { data: "status", name: "Status", render: statusRender, class: "px-1 text-center", sort: true },
        { name: "Action", render: rowActions, class: "text-center px-2 " }
    ];

    const handleSearch = (params: any) => {
        BillService.findAllByAllColumn(params).then(response => {
            setDate(response.data);
        }).catch(reason => {
            if (reason.code === "ERR_NETWORK") {
                navigate("/maintenance");
            }
            if (reason.response.status === 401) {
                AuthService.logout();
                navigate("/login");
            }
        });
    }

    return (
        <>
            <div className="app-content content">
                <div className="content-wrapper">
                    <div className="content-wrapper-before"></div>
                    <div className="content-header row">
                        <div className="content-header-left col-md-4 col-12 mb-2">
                            <h3 className="content-header-title">All Patient Bill List</h3>
                        </div>
                        <div className="content-header-right col-md-8 col-12">
                            <div className="breadcrumbs-top float-md-right">
                                <div className="breadcrumb-wrapper mr-1">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="/">Home</a>
                                        </li>
                                        <li className="breadcrumb-item"><a href="/user">User</a>
                                        </li>
                                        <li className="breadcrumb-item active">Create
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-body ">
                        <div className="row">
                            <div className="col-12">
                                <div className="card ">
                                    <div className="card-content collapse show">
                                        <div className="card-body ">
                                            <DataTable columns={columns} data={data} onSearch={handleSearch}
                                                endpoint={API_ROUTES.BILL_ADVANCE_SEARCH} refresh={refresh}
                                                dateFilter={true}
                                                actionButtons={true}
                                                pagesSizes={pageSizes}
                                                searchPlaceholder={"Patient Name, Passport No, Agent Or Agency Name"} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                action === 'pay' ?
                    <div className={`modal fade fadeIn show`} role="dialog"
                        style={{ display: 'block' }} data-backdrop="false" tabIndex={-1}>
                        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-body scroll-85">
                                    <PayBillComponent billId={bill.id} onCancel={cancelHandler} onSuccess={successHandler} />
                                </div>
                            </div>
                        </div>
                    </div> : ""
            }
            {
                action === 'view' ?
                    <div className={`modal fade fadeIn show`} role="dialog"
                        style={{ display: 'block' }} data-backdrop="false" tabIndex={-1}>
                        <div className="modal-dialog modal-xl modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-body scroll-80">
                                    <Invoice billId={bill.id} />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-sm btn-secondary"
                                        onClick={() => setAction('none')}>Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> : ""
            }
        </>
    );
}

export default PatientBills;
