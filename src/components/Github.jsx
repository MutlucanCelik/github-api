import React from "react";
import { useFetchUserQuery } from "../store";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";

export default function Github({ gitUser }) {
  const { data, isError, isFetching } = useFetchUserQuery(
    gitUser ? gitUser : ""
  );

  return (
    <div className="content">
      {data ? (
        isFetching ? (
          <div className="loading">
            <AiOutlineLoading3Quarters size={80} />
          </div>
        ) : isError ? (
          <div className="error">Bu isimde bir kullanıcı bulunmamakta</div>
        ) : (
          <>
            <div className="content-top">
              <div className="img-container">
                <img src={data.avatar_url} alt="" />
              </div>
            </div>
            <div className="content-bot">
              <div>
                <h3 className="content-name">{data.name}</h3>
                <div className="interaction">
                  <div className="interaction-content">
                    <span className="interaction-name">Takipçi</span>
                    <span>{data.followers}</span>
                  </div>
                  <div className="interaction-content">
                    <span className="interaction-name">Takip</span>
                    <span>{data.following}</span>
                  </div>
                </div>

                <div className="content-repos">
                  <span className="interaction-name">Proje Sayısı</span>{" "}
                  <span>{data.public_repos}</span>
                </div>
              </div>
            </div>
          </>
        )
      ) : (
        <div className="welcome">
          <h1 className="welcome-head">Github Api</h1>
          <FiGithub size={150} style={{ color: "#fff" }} />
          <span className="welcome-message">
            Kullanıcı ismi girerek istediğiniz kullanıcıya ulaşabilirsin.
          </span>
        </div>
      )}
    </div>
  );
}
