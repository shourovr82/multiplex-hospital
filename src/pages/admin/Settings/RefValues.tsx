import React from 'react';
import { Link } from "react-router-dom";
import RefValuesForm from "../../../components/forms/RefValuesForm";

function RefValues(props: any) {
    return (
        <div className="app-content content">
            <div className="content-wrapper">
                <div className="content-wrapper-before"></div>
                <div className="content-header row">
                    <div className="content-header-left col-md-4 col-12 mb-2">
                        <h3 className="content-header-title">Reference Values</h3>
                    </div>
                    <div className="content-header-right col-md-8 col-12">
                        <div className="breadcrumbs-top float-md-right">
                            <div className="breadcrumb-wrapper mr-1">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/">Home</a>
                                    </li>
                                    <li className="breadcrumb-item"><Link to="/test">Reference Values</Link>
                                    </li>
                                    <li className="breadcrumb-item active">Create
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-body">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-content collapse show">
                                    <div className="card-body">
                                        <RefValuesForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default RefValues;
