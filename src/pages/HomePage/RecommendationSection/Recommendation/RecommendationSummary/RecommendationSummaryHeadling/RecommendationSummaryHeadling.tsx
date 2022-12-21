import "./RecommendationSummaryHeadling.scss";

export const RecommendationSummaryHeadling: React.FC = () => {
  return (
    <div className="recommendation_summary_headling">
      <h4>
        We cook – they enjoy every minute of their
        <img
          className="arrow-right"
          src={require("../../../../../../image/HomePage/arrow-right.png")}
          alt="arrow"
        />
        lives
      </h4>
    </div>
  );
};
