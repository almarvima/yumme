package com.yumme.backendyumme.service.impl;


import com.yumme.backendyumme.domain.Suggestion;
import com.yumme.backendyumme.repository.SuggestionRepository;
import com.yumme.backendyumme.repository.UserRepository;
import com.yumme.backendyumme.service.SuggestionService;
import jakarta.persistence.Access;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SuggestionServiceImpl implements SuggestionService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private SuggestionRepository suggestionRepository;

    @Override
    public boolean createSuggestion(Suggestion request) {
        Suggestion suggest = Suggestion.builder()
                .name(request.getName())
                .email(request.getEmail())
                .feedback(request.getFeedback())
                .build();

        boolean exist = userRepository.existByEmail(request.getEmail());

        if (exist)
            suggest.setYummeUser(true);

        return suggestionRepository.save(suggest) != null;
    }
}
