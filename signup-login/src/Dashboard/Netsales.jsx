// import react from "react";
import "./dashboard.css";
import MyComponent from './csv';

function  Netsales(Event_id){return(
<div>
<div className="cards-carousel-item eds-g-cell eds-g-cell-4-12 snipcss0-0-0-1">
      <div className="dashboard-amount-card eds-l-mar-all-3 eds-l-pad-vert-3 eds-l-pad-hor-5 snipcss0-1-1-2">
        <div className="eds-text-bm card-title eds-text-weight--heavy snipcss0-2-2-3">
          <div className="display-flex snipcss0-3-3-4">
            <div className="eds-l-mar-right-1 snipcss0-4-4-5" data-testid="amount-card-title">Net Sales</div>
            <span data-testid="amount-card-tooltip" className="snipcss0-4-4-6">
              <div tabIndex={-1} className="snipcss0-5-6-7">
                <div className="eds-tooltip--hoc-wrapper snipcss0-6-7-8" data-spec="tooltip-wrapper" tabIndex={0}>
                  <i className="eds-vector-image eds-icon--xsmall eds-vector-image--grey-600 snipcss0-7-8-9" data-spec="icon" data-testid="icon" aria-hidden="true"  title="Royalties included, if any">
                    <svg id="info-chunky_svg__eds-icon--info-chunky_svg" x={0} y={0} viewBox="0 0 24 24" xmlSpace="preserve" className="snipcss0-8-9-10">
                      <path id="info-chunky_svg__eds-icon--info-chunky_base" fillRule="evenodd" clipRule="evenodd" d="M12 6c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6zm0 14c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8z"></path>
                      <path id="info-chunky_svg__eds-icon--info-chunky_dot" fillRule="evenodd" clipRule="evenodd" d="M11 8h2v2h-2z"></path>
                      <path id="info-chunky_svg__eds-icon--info-chunky_line" fillRule="evenodd" clipRule="evenodd" d="M11 11h2v5h-2z"></path>
                    </svg>
                  </i>
                </div>
              </div>
            </span>
          </div>
        </div>
        <div className="eds-l-mar-top-1 eds-text-hm snipcss0-2-2-11" data-testid="amount-card-value"> £{Event_id.Nsales} </div>
        <div className="eds-text-bs eds-l-mar-top-1 snipcss0-2-2-12">
          £{Event_id.Gross} gross sales
        </div>
        <div className="eds-text-bs card-footer eds-l-mar-top-2 snipcss0-2-2-13">
          Open
          <a href="www.google.com" className="snipcss0-3-13-14"> event sales breakdown
          </a>
        </div>
      </div> </div>
    <div className="cards-carousel-item eds-g-cell eds-g-cell-4-12">
      <div className="dashboard-amount-card eds-l-mar-all-3 eds-l-pad-vert-3 eds-l-pad-hor-5">
        <div className="eds-text-bm card-title eds-text-weight--heavy">
          <div className="display-flex">
            <div className="eds-l-mar-right-1" data-testid="amount-card-title">
              Tickets Sold
            </div>
          </div> </div>
        <div className="eds-l-mar-top-1 eds-text-hm" data-testid="amount-card-value">
          <div className="">
            <span>{Event_id.Sold}</span>
            <span className="eds-text-bl">/{Event_id.Tickets}</span>
          </div>
        </div>
        <div className="eds-text-bs eds-l-mar-top-1">{Event_id.Paid} paid • {Event_id.Free} free</div>
        <div className="eds-text-bs card-footer eds-l-mar-top-2"></div>
      </div>
    </div>  
    <div className="block-inline">
    <div className="eds-l-mar-top-10 eds-l-pad-hor-3 ">
        <div className="eds-text-bm eds-text-weight--heavy">
          Other Attendee Actions
        </div>
        <div className="eds-l-mar-top-8">
          <div className="dashboard-task-item">
            <span className="eds-l-mar-right-3">
              <i className="eds-vector-image eds-icon--xsmall eds-vector-image--ui-blue" data-spec="icon" data-testid="icon" aria-hidden="true"
              >
                <svg className="line-chart_svg__eds-icon--line-chart__svg" viewBox="0 0 24 24" >
                  <path className="line-chart_svg__eds-icon--line-chart__base" fillRule="evenodd" clipRule="evenodd" d="M3 21v-5.9l2.8-2.4c.4.3.8.4 1.2.4.6 0 1.1-.3 1.5-.7l2.5 1.3v.4c0 1.1.9 2 2 2s2-.9 2-2c0-.3-.1-.6-.2-.9l3-2.5c.3.2.7.4 1.2.4 1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2c0 .3.1.6.2.9l-3 2.5c-.3-.2-.7-.4-1.2-.4-.6 0-1.1.3-1.5.7L9 11.5v-.4c0-1.1-.9-2-2-2s-2 .9-2 2c0 .3.1.6.2.9L3 13.8V2H2v20h20v-1H3zM19 8.1c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1c0-.5.4-1 1-1zm-6 5c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1c0-.5.4-1 1-1zm-6-3c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1c0-.5.4-1 1-1z"></path>
                </svg>
              </i>
            </span>
            <div>
              <MyComponent/>
            </div>
          </div>
        </div>
      </div></div>
    </div>)}
    export default Netsales;