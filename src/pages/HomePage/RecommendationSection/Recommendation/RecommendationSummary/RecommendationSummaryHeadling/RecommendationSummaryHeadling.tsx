import "./RecommendationSummaryHeadling.scss";
import arrowRight from './arrow-right.png';

export const RecommendationSummaryHeadling: React.FC = () => {
  return (
    <div className="recommendation_summary_headling">
      <h4>
        We cook – they enjoy every minute of their
        <img
          className="arrow-right"
          src={arrowRight}
          alt="arrow"
        />
        lives
      </h4>
    </div>
  );
};

