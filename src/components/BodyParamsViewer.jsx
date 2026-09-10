import React, { useState } from 'react';
import { Plus, X, ChevronDown } from 'lucide-react';

export default function BodyParamsViewer() {
  const [walletExpanded, setWalletExpanded] = useState(true);
  const [tokenOptionsExpanded, setTokenOptionsExpanded] = useState(false);
  const [txExpanded, setTxExpanded] = useState(true);
  const [recipientsDataExpanded, setRecipientsDataExpanded] = useState(false);
  const [recipientsExpanded, setRecipientsExpanded] = useState(false);
  const [showEnums, setShowEnums] = useState(false);

  const [coin, setCoin] = useState('eth');
  const [walletId, setWalletId] = useState('12345');
  const [txType, setTxType] = useState('transfer');
  const [allToken, setAllToken] = useState('false');
  const [screeningFlag, setScreeningFlag] = useState('true');
  const [feeLevel, setFeeLevel] = useState('market');

  const enumsList = [
    'eth', 'btc', 'doge', 'bch', 'ltc', 'matic', 'xrp', 'xlm', 'trx', 'bnb',
    'uatom', 'sol', 'xdc', 'aeth', 'avax', 'oeth', 'ethw', 'algo', 'beth', 'kaia'
  ];

  return (
    <div className="body-params-container">
      <h3 className="body-params-title">Body Params</h3>

      <div className="body-params-card">
        {/* 1. Wallet Object Group */}
        <div className="param-group">
          <div className="group-header">
            <span className="param-key">wallet</span>
            <span className="param-type-tag">object</span>
            <span className="param-req-tag">required</span>
          </div>

          <div className={`accordion-box ${walletExpanded ? 'active-box' : ''}`}>
            <div
              className="accordion-header"
              onClick={() => setWalletExpanded(!walletExpanded)}
            >
              <span className="accordion-title">WALLET-OBJECT-3 OBJECT</span>
              <button className="accordion-toggle-btn">
                {walletExpanded ? <X size={14} /> : <Plus size={14} />}
              </button>
            </div>

            {walletExpanded && (
              <div className="accordion-content">
                {/* coin field */}
                <div className="field-row">
                  <div className="field-meta">
                    <div className="field-tags">
                      <span className="field-name">coin</span>
                      <span className="field-type">string</span>
                      <span className="field-enum">enum</span>
                      <span className="param-req-tag">required</span>
                    </div>
                    <p className="field-desc">
                      Enter the abbreviated form of the cryptocurrency associated with the wallet. Note that for "arb", enter "aeth".
                    </p>
                    <button
                      className="enum-btn"
                      onClick={() => setShowEnums(!showEnums)}
                    >
                      {showEnums ? '− Hide enum values' : '+ Show 20 enum values'}
                    </button>

                    {showEnums && (
                      <div className="enum-chips-box">
                        {enumsList.map((e, i) => (
                          <span key={i} className="enum-chip" onClick={() => setCoin(e)}>
                            {e}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="field-input-col">
                    <div className="select-wrapper">
                      <select
                        className="param-select"
                        value={coin}
                        onChange={(e) => setCoin(e.target.value)}
                      >
                        {enumsList.map((e, i) => (
                          <option key={i} value={e}>{e}</option>
                        ))}
                      </select>
                      <span className="select-chevron">↕</span>
                    </div>
                  </div>
                </div>

                {/* walletId field */}
                <div className="field-row">
                  <div className="field-meta">
                    <div className="field-tags">
                      <span className="field-name">walletId</span>
                      <span className="field-type">int32</span>
                      <span className="param-req-tag">required</span>
                      <span className="field-range">-2147483648 to 2147483647</span>
                    </div>
                    <p className="field-desc">Enter the unique identifier (ID) of the wallet.</p>
                  </div>

                  <div className="field-input-col">
                    <input
                      className="param-input"
                      type="text"
                      value={walletId}
                      onChange={(e) => setWalletId(e.target.value)}
                    />
                  </div>
                </div>

                {/* transactionType field */}
                <div className="field-row">
                  <div className="field-meta">
                    <div className="field-tags">
                      <span className="field-name">transactionType</span>
                      <span className="field-type">string</span>
                      <span className="field-enum">enum</span>
                      <span className="field-default">Defaults to transfer</span>
                    </div>
                    <p className="field-desc">
                      Set to "enableToken" to create a trust line for the asset instead of sending value. Valid only for opt-in chains (currently XRP and XLM). (Optional)
                    </p>
                    <div className="allowed-badge-row">
                      <span>Allowed:</span>
                      <span className="allowed-pill">transfer</span>
                      <span className="allowed-pill">enableToken</span>
                    </div>
                  </div>

                  <div className="field-input-col">
                    <div className="select-wrapper">
                      <select
                        className="param-select"
                        value={txType}
                        onChange={(e) => setTxType(e.target.value)}
                      >
                        <option value="transfer">transfer</option>
                        <option value="enableToken">enableToken</option>
                      </select>
                      <span className="select-chevron">↕</span>
                    </div>
                  </div>
                </div>

                {/* allToken field */}
                <div className="field-row">
                  <div className="field-meta">
                    <div className="field-tags">
                      <span className="field-name">allToken</span>
                      <span className="field-type">boolean</span>
                      <span className="field-default">Defaults to false</span>
                    </div>
                    <p className="field-desc">
                      Set its value to true when performing operations with tokens (non-native assets). (Optional)
                    </p>
                  </div>

                  <div className="field-input-col">
                    <div className="select-wrapper">
                      <select
                        className="param-select"
                        value={allToken}
                        onChange={(e) => setAllToken(e.target.value)}
                      >
                        <option value="false">false</option>
                        <option value="true">true</option>
                      </select>
                      <span className="select-chevron">↕</span>
                    </div>
                  </div>
                </div>

                {/* tokenOptions sub-object */}
                <div className="sub-accordion-box">
                  <div
                    className="sub-accordion-header"
                    onClick={() => setTokenOptionsExpanded(!tokenOptionsExpanded)}
                  >
                    <div>
                      <span className="field-name" style={{ marginRight: '8px' }}>tokenOptions</span>
                      <span className="field-type">object</span>
                    </div>
                    <span className="sub-accordion-title">TOKEN-OPTIONS-OBJECT-REQUEST OBJECT</span>
                    <button className="accordion-toggle-btn">
                      {tokenOptionsExpanded ? <X size={14} /> : <Plus size={14} />}
                    </button>
                  </div>

                  {tokenOptionsExpanded && (
                    <div className="accordion-content">
                      <div className="field-row">
                        <div className="field-meta">
                          <span className="field-name">tokenName</span>
                          <span className="field-type">string</span>
                          <p className="field-desc">Enter the token symbol (e.g., usdc, usdt, rlusd).</p>
                        </div>
                        <div className="field-input-col">
                          <input className="param-input" type="text" defaultValue="USDC" />
                        </div>
                      </div>
                      <div className="field-row">
                        <div className="field-meta">
                          <span className="field-name">tokenAddress</span>
                          <span className="field-type">string</span>
                          <p className="field-desc">Provide the token contract address or issuer string.</p>
                        </div>
                        <div className="field-input-col">
                          <input className="param-input" type="text" defaultValue="0xD87Ba7A50B2E7E660f678A895E4B72E7CB4CCd9C" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 2. Transactions Object Group (Matching Official Liminal ReadMe UI) */}
        <div className="param-group" style={{ marginTop: '24px' }}>
          <div className="group-header">
            <span className="param-key">transactions</span>
            <span className="param-type-tag">object</span>
            <span className="param-req-tag">required</span>
          </div>
          <p className="group-desc">A list of recipient objects, each containing the recipient's address and amount.</p>

          <div className={`accordion-box ${txExpanded ? 'active-box' : ''}`}>
            <div
              className="accordion-header"
              onClick={() => setTxExpanded(!txExpanded)}
            >
              <span className="accordion-title">TRANSACTIONS-WITHDRAWAL-OBJECT-REQUEST OBJECT</span>
              <button className="accordion-toggle-btn">
                {txExpanded ? <X size={14} /> : <Plus size={14} />}
              </button>
            </div>

            {txExpanded && (
              <div className="accordion-content">
                <div className="param-group" style={{ marginBottom: 0 }}>
                  <div className="group-header">
                    <span className="param-key">recipientsData</span>
                    <span className="param-type-tag">object</span>
                    <span className="param-req-tag">required</span>
                  </div>
                  <p className="group-desc">
                    recipients is required with at least one entry for a value transfer. Must be omitted or an empty array when wallet.transactionType is "enableToken" (a non-empty array is rejected for that call).
                  </p>

                  <div className={`sub-accordion-box ${recipientsDataExpanded ? 'active-box' : ''}`}>
                    <div
                      className="sub-accordion-header"
                      onClick={() => setRecipientsDataExpanded(!recipientsDataExpanded)}
                    >
                      <span className="sub-accordion-title">RECIPIENTSDATA-OBJECT-REQUEST OBJECT</span>
                      <button className="accordion-toggle-btn">
                        {recipientsDataExpanded ? <X size={14} /> : <Plus size={14} />}
                      </button>
                    </div>

                    {recipientsDataExpanded && (
                      <div className="accordion-content">
                        <div className="param-group" style={{ marginBottom: 0 }}>
                          <div className="group-header">
                            <span className="param-key">recipients</span>
                            <span className="param-type-tag">array of objects</span>
                            <span className="param-req-tag">required</span>
                          </div>

                          <div className={`sub-accordion-box ${recipientsExpanded ? 'active-box' : ''}`}>
                            <div
                              className="sub-accordion-header"
                              onClick={() => setRecipientsExpanded(!recipientsExpanded)}
                            >
                              <span className="sub-accordion-title">RECIPIENTS-OBJECT-REQUEST OBJECT</span>
                              <button className="accordion-toggle-btn">
                                {recipientsExpanded ? <X size={14} /> : <Plus size={14} />}
                              </button>
                            </div>

                            {recipientsExpanded && (
                              <div className="accordion-content">
                                <div className="field-row">
                                  <div className="field-meta">
                                    <span className="field-name">address</span>
                                    <span className="field-type">string</span>
                                    <span className="param-req-tag">required</span>
                                    <p className="field-desc">Target recipient destination wallet address.</p>
                                  </div>
                                  <div className="field-input-col">
                                    <input className="param-input" type="text" defaultValue="0x017208E63ec387461C7e8f20bA9C6F9Dec939cfe" />
                                  </div>
                                </div>
                                <div className="field-row">
                                  <div className="field-meta">
                                    <span className="field-name">amount</span>
                                    <span className="field-type">string</span>
                                    <span className="param-req-tag">required</span>
                                    <p className="field-desc">Positive decimal string transfer amount.</p>
                                  </div>
                                  <div className="field-input-col">
                                    <input className="param-input" type="text" defaultValue="0.008" />
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="field-row" style={{ marginTop: '16px' }}>
                          <div className="field-meta">
                            <span className="field-name">sequenceId</span>
                            <span className="field-type">string</span>
                            <p className="field-desc">Unique tracking sequence UUID generated by client.</p>
                          </div>
                          <div className="field-input-col">
                            <input className="param-input" type="text" defaultValue="08d5893b-0066-4619-b7af-a5bae54205d5" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 3. screeningFlag Group */}
        <div className="param-group" style={{ marginTop: '24px' }}>
          <div className="field-row" style={{ borderBottom: 'none' }}>
            <div className="field-meta">
              <div className="field-tags">
                <span className="param-key">screeningFlag</span>
                <span className="field-type">boolean</span>
                <span className="new-feature-badge">[NEW]</span>
                <span className="field-default">Defaults to false</span>
              </div>
              <p className="field-desc">
                Enables automated pre-transaction Cube3 threat screening. Returns HTTP 422 if Risk Score &gt; 80.
              </p>
            </div>
            <div className="field-input-col">
              <div className="select-wrapper">
                <select
                  className="param-select"
                  value={screeningFlag}
                  onChange={(e) => setScreeningFlag(e.target.value)}
                >
                  <option value="true">true</option>
                  <option value="false">false</option>
                </select>
                <span className="select-chevron">↕</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4. feeLevel Group */}
        <div className="param-group" style={{ marginTop: '16px' }}>
          <div className="field-row" style={{ borderBottom: 'none' }}>
            <div className="field-meta">
              <div className="field-tags">
                <span className="param-key">feeLevel</span>
                <span className="field-type">string</span>
                <span className="field-enum">enum</span>
              </div>
              <p className="field-desc">
                The fee level setting used to pay gas fee when processing a transaction for EVM chains configured based on the blockchain network's traffic. Define the additional parameters in evmCustomfee when feeLevel is custom. (Optional)
              </p>
            </div>
            <div className="field-input-col">
              <div className="select-wrapper">
                <select
                  className="param-select"
                  value={feeLevel}
                  onChange={(e) => setFeeLevel(e.target.value)}
                >
                  <option value="slow">slow</option>
                  <option value="market">market</option>
                  <option value="aggressive">aggressive</option>
                  <option value="custom">custom</option>
                </select>
                <span className="select-chevron">↕</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

